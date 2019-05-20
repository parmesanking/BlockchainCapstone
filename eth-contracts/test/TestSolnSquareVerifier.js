



 
 
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
    
var Verifier = artifacts.require('Verifier');
const proof = {
    "proof":
    {
        "A":["0x26ec718005ddd0486c88c8de42258de9ae92796e538615e90a7e03dd3fdbc4e7", "0x0f81bca7ea05a37c624794210d92b12a65000afcd11d9a70e6609d56f5cedb98"],
        "A_p":["0x21d9930446f8eb6d1902e11e1c59a9c06214ec0175928847655d94b7527e62e0", "0x17cca24c1e3a1288a0cde5f42563d73db70fa5bbfb057214361ccd795435acc6"],
        "B":
            [["0x0325a95d24988af3f41a3ce4b25e5ab46a2bb33fd3325903802bed850d7185c4", "0x1b546c1a165438bc03fd3f801548526016609a0c6c32ed5cda7bb4cabeaf206f"], ["0x124b2871a57c122b3703715b683ee3a318fdfbe28da3071826a125545d06bafc", "0x201fceb046db3f8c5a34a3c6007e4411535bb569a18d154e2cc4105d06a7117f"]],
        
        "B_p":["0x0a21003301cef9baeeffe5b5622bceb74eaee6693f7ef6737a3ef498582c87ed", "0x23890c22cf01ea5bdbba99cadfcea0624dac6f7333422786751ba92cf4bf8ac6"],
        "C":["0x21afeb2a6d4dc8e49890c336e9aa1654309b8b4f6cae74969d3988af1d4fb591", "0x04827a775dfd772ac476dbdae6815d82fd2348d3bb51347e7edd2ad9268a915c"],
        "C_p":["0x30333912b992543be71d65f9401529b71fc7f7b74e05413d58e3ce73c52f21f2", "0x055d2035efcc3f5557ad3152abd1052ce09331d45ff7424fb2fb711f35c661de"],
        "H":["0x1cc7bfc54b83c4cd57484d6887492d0559778ead2454cfdb3a1197daad6ee7d7", "0x2e2ab6f61bd310e73c09452a484556df20e3c84aacb55237c059275ecd8d95b8"],
        "K":["0x2d7ba90b50519fc724d5467c8b94fb810a5828804cea2859afde7ddc85af06bf", "0x0ba94360b0bb54c3e35a31b2dfb161a2c1c0c5ce381edd2c8a59f3bbcefe7558"]
    },
    "input":[9,1]
}

contract('Verifier', accounts => {
    const account_one = accounts[0];
    const account_20 = accounts[19];

    describe('test solnSquareVerifier', function () {
        beforeEach(async function () { 

            let verifierContract = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifierContract.address, {from: account_one});

 
            
        })

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

it('ERC721 token can be minted for contract - SolnSquareVerifier', async function () { 
    //console.log("proof",proof)
    let v = await this.contract.mint.call(account_20,
    20, "url",{from: account_one}
    
    
    
  );
  
  assert.equal(v, true, "invalid proof");
})

 // Test if a new solution can be added for contract - SolnSquareVerifier

        it('new solution can be added for contract - SolnSquareVerifier', async function () { 
            //console.log("proof",proof)
            let v = await this.contract.mintNewNFT.call(
                account_20,
                20,
                proof.proof.A,
                proof.proof.A_p,
                proof.proof.B,
                proof.proof.B_p,
                proof.proof.C,
                proof.proof.C_p,
                proof.proof.H,
                proof.proof.K,
                proof.input,
                {from: account_one}
              );
              
              assert.equal(v, true, "invalid proof");
        })
 

       
    });
})


 
