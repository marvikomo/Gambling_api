/**
 |----------------------------------------------
 | Gambling Controller
 |----------------------------------------------
 | Holds all Gambling operations
 |----------------------------------------------
 */
const Sequelize = require('sequelize');

const callbacks = require('../functions/index.js');



require('dotenv').config();
const secret = process.env.SECRET;

class GamblingController {

    /**
     * admin login
     */
    static placeBet(req, res) {
        try {

         
           let stake = req.params.amount; //provide the amount with limit nt more than #60000
          
           let number = req.params.number; //sum of predicted outcomes of the two dices
         
           
           let dice1 = Math.floor(Math.random() * 6) + 1
           
           let dice2 = Math.floor(Math.random() * 6) + 1
           let total = dice1 + dice2
           var reward = '';
           var message = ''
          

       
         
           if(callbacks.checkAmount(stake) == false){ //validate amount

         message = "Amount is not a valid"
            return res.status(203).json({
                error:true,
                message:message
            });

           }
           if(callbacks.betLimit(stake))
           { 
               //check bet limit
            message = "Bet limit exceeded"
            return res.status(203).json({
                error:true,
                message:message
            });
           }
           
            if(total == number)
           {
             reward = 2*stake
             message = `Congratulations you just won ${reward} with odd of 2`
           }else if((total-1) == number)
           {
               reward = 0.2*stake
               message = `oops you were close and you just won ${reward} with odd of 0.2`
           }
           else if((total+1) == number)
           {
               reward = 0.2*stake
               message = `oops you were close and you just won ${reward} with odd of 0.2`
           }else{
               reward = 0;
               message = `Unforntunately u lost the game please try again`
           }

           return res.status(200).json({
            error:false,
            message:message
        });
        } catch (e) {
            return res.sendStatus(500)
        }
    }

   
}
module.exports = GamblingController;
