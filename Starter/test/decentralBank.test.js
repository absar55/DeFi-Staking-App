//const chaiAsPromised = require('chai-as-promised');


//const { assert } = require('console');

const Tether = artifacts.require("Tether");
const RWD = artifacts.require("RWD");
const DecentralBank = artifacts.require("DecentralBank");


require('chai')
.use(require('chai-as-promised'))



.should()

contract('DecentralBank', ([owner, customer]) => {

    let tether,rwd, decentralBank


    function tokens(number)
    {
        return web3.utils.toWei(number, 'ether')
    }


    before(async () =>{
        tether = await Tether.new()
        rwd = await RWD.new()
        decentralBank = await DecentralBank.new(rwd.address, tether.address)

        await rwd.transfer(decentralBank.address, tokens('1000000'))

        await tether.transfer(customer, tokens('100'),{from: owner})
    })

    describe('Mock Tether Deployment', async ()=>{
        it('matches name successfully', async() => {
            const name = await tether.name()
            assert.equal(name, 'Mock Tether Token')


        })
    })

    describe('Reward Token Deployment', async ()=>{
        it('matches name successfully', async() => {
            const name = await rwd.name()
            assert.equal(name, 'Reward Token')


        })
    })


    describe('Decentral Bank Deployment', async ()=>{
        it('matches name successfully', async() => {
            const name = await decentralBank.name()
            assert.equal(name, 'Decentral Bank')


        })

        it('contract has token', async() =>{
             let balance= await rwd.balanceOf(decentralBank.address)
             assert.equal(balance, tokens('1000000'))
        })

        describe('Yield Farming', async ()=>{
            it('rewards tokens for staking', async() =>{
                let result


                result = await tether.balanceOf(customer)
                assert.equal(result.toString(), tokens('100'),'customer mock wallet balance before staking')
            
            await tether.approve(decentralBank.address,tokens('100'),{from: customer})
            await decentralBank.depositTokens(tokens('100'),{from: customer})


            //Check updated balance of Customer
            result = await tether.balanceOf(customer)
            assert.equal(result.toString(), tokens('0'),'customer mock wallet balance after staking 100 tokens')

                //Check updated balance of decentral bank
            result = await tether.balanceOf(decentralBank.address)
            assert.equal(result.toString(), tokens('100'),'decentral bank mock wallet balance after staking from customer')

                //is staking update
            result = await decentralBank.isStaking(customer)
            assert.equal(result.toString(),'true','customer is staking status after staking')

            //issue tokens
            await decentralBank.issueTokens({from: owner})


            //Ensure only the owner can issue token
            await decentralBank.issueTokens({from: customer}).should.be.rejected


            //unstake Tokens
            await decentralBank.unstakeTokens({from: customer})

                //checking unstake balances
            result = await tether.balanceOf(customer)
            assert.equal(result.toString(), tokens('100'),'customer mock wallet balance after unstaking')

                //Check updated balance of decentral bank
            result = await tether.balanceOf(decentralBank.address)
            assert.equal(result.toString(), tokens('0'),'decentral bank mock wallet balance after unstaking from customer')

                //is staking update
            result = await decentralBank.isStaking(customer)
            assert.equal(result.toString(),'false','customer is no longer staking status after unstaking')


        })

        })
    })


})