import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faPercentage, faWallet } from "@fortawesome/free-solid-svg-icons";
const quickAccess : React.FC = () =>{
  return(
    <div>
      <div className="amount-spent">
        <h5>
          Amount Spent Today:
          <span>
          ₦ 0.00
          </span>
        </h5>
      </div>
      <div className="apps-bot">
        <h5>
          Get our application/Bots:
        </h5>
        <a href="#"><FontAwesomeIcon icon={faLaptop}/></a>
      </div>
      <div>
        <h4>
          Quick Access
        </h4>
        <div>
         <FontAwesomeIcon icon={faPercentage} />
         <p>Redeem Coupon</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faWallet}/>
          <p>Bonus 2 Wallet</p>
        </div>
      </div>

      <div>
        <h3>Invite and earn</h3>
        <p>You wll earn N0 on the users first deposit(capped at N100)</p>
        <p>Forward your referral code <span>c1dabb</span></p>
        <p>Or forward link <a href="#">https://app.dataguri.com.ng/register?referral=c1dabb</a></p>
      </div>

    </div>
  )
}
export default quickAccess