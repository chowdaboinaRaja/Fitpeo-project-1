import './App.css';
import React from 'react';
import { TbSquareKey } from "react-icons/tb";
import { FaCircleRadiation } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { PiUserCircleThin } from "react-icons/pi";
import { IoMdWallet } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";




import raja from './raja.jpg'
// import RoundedBarChart from './components/RoundedBarChart';
import Bichart from "./components/BichartNew.js"
import Piechart from './components/Piechart';

function App() {
  return (
    <div className='web'>
      <div className='side_menu'>
        <div className='menu_top'>
          <header><FiAlignJustify />Dashbord</header>
          <ul>
            <li className='menu_item'><div className="item"><TbSquareKey />Dashbord</div></li>
            <li className='menu_item1'><div className="items"><FaCircleRadiation />Product</div><div><MdChevronRight /></div></li>
            <li className='menu_item1'><div className="items"><PiUserCircleThin />Customer</div><div><MdChevronRight /></div></li>
            <li className='menu_item1'><div className="items"><IoMdWallet />Income</div><div><MdChevronRight /></div></li>
            <li className='menu_item1'><div className="items"><CiDiscount1 />Promte</div><div><MdChevronRight /></div></li>
            <li className='menu_item1'><div className="items"><RiQuestionnaireLine />Help</div><div><MdChevronRight /></div></li>
          </ul>
        </div>
        <div className='menu_bottom'>
          <div className='bottom_left'>
            <img src={raja} alt="please wait"></img>
            <div className='bottom_text'>
              <div>Evano</div>
              <div className='dull_color'>Project Manages</div>
            </div>
          </div>
          <div><MdKeyboardArrowDown /></div>
        </div>
      </div>
      <div className='main'>
        <h4 className='heading'>Hello Shahrukh &#128075;,</h4>
        <div className='card_group'>
          <div className='cards'>
            <div className='card'>
              <div className='card1_content'><AiOutlineDollarCircle size={40} color='#15AF55' /></div>
              <div className='card_right'>
                <div className='earning'>Earning</div>
                <div className='earn_memebers'>$198k</div>
                <p className='p_content'><span className='earn_ratio'>&#8593; 37.8%</span>this month</p>
              </div>
            </div>
          </div>
          <div className='cards'>
            <div className='card'>
              <div className='card2_content'><BsFileText size={40} color='#B438FF' /></div>
              <div className='card_right'>
                <div className='earning'>Orders</div>
                <div className='earn_memebers'>$2.4k</div>
                <p className='p_content'><span className='order_ratio'>&#8595; 2%</span>this month</p>
              </div>
            </div>
          </div>
          <div className='cards'>
            <div className='card'>
              <div className='card3_content'><LuWallet size={40} color='#085ABF' /></div>
              <div className='card_right'>
                <div className='earning'>Balance</div>
                <div className='earn_memebers'>$2.4k</div>
                <p className='p_content'><span className='balance_ratio'>&#8595; 2%</span>this month</p>
              </div>
            </div>
          </div>
          <div className='cards'>
            <div className='card'>
              <div className='card4_content'><BsHandbag size={40} color='#DA051C' /></div>
              <div className='card_right'>
                <div className='earning'>Total Sales</div>
                <div className='earn_memebers'>$89k</div>
                <p className='p_content'><span className='sales_ratio'>&#8593; 11%</span>this month</p>
              </div>
            </div>
          </div>
        </div>
        <div className='highchart'>
          <div className='bar_chart'>
            <Bichart />
          </div>
          <div className='pie_chart'><Piechart />
          </div>
        </div>
        <div className='main_bottom'>
          <div className='product_search'>
          <div className='product_sell'>Product Sell</div>
          <div className='sell_left'>
            <div className='product'>
            <BsSearch/><input className="product" type="text" placeholder='Seacrh'></input>
            </div>
            <div>
              <label for="dog-names" className='lab'>last 30 days</label>
              <select name="dog-names" id="dog-names">
              <option value="rigatoni"></option>
                <option value="rigatoni">Day1</option>
                <option value="dave">Day2</option>
                <option value="pumpernickel">Day3</option>
                <option value="reeses">Day4</option>
              </select>
            </div>
          </div>
          </div>
          <div  className='product_details'>
          <div className='product_name'>Product Name</div>
          <div className='product_description'>
          <div>Stoke</div>
          <div>Price</div>
          <div>Total</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default App;
