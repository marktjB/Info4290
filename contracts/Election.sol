pragma solidity 0.4.25;

contract Election {
    // Model a Candidate
    //Candidate list
    //https://www.elections.ca/content.aspx?section=ele&document=bc&dir=pas/38e/loc/lis&lang=e
    string[] x = ['DE LA PENA, Romeo (Green Party)', 'HIEBERT, Russ (Conservative)', 'HIGGINBOTHAM, Judy (Liberal)', 'KAUR, H. Pummy (N.D.P.)', 'TAYLOR, Pat (Canadian Action)']; //array of candidates

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters;
    // Store Candidates
    // Fetch Candidate
    mapping(uint => Candidate) public candidates;
    // Store Candidates Count
    uint public candidatesCount;

    // voted event
    event votedEvent (
        uint indexed _candidateId
    );

    

    // Add Candidates through the loop
    constructor () public {
        for(uint i=0; i<x.length; i++){
            addCandidate(x[i]);
        }
        // addCandidate("Renzo");
    }

    function addCandidate (string _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    //This is the part of the smart contract that submits vote
    //Cast Votes - Step 3 walks through this section a bit
    function vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}
