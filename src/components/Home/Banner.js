import React from 'react'
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
        <div className='banner'>
            <div className="left_banner">
                <ul>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Electronics Accssories</Link></li>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Computer</Link></li>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Server & Storage</Link></li>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Gadget</Link></li>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Mobile Device</Link></li>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Computer</Link></li>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Server & Storage</Link></li>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Gadget</Link></li>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Mobile Device</Link></li>
                    <li><i class="fa-solid fa-caret-right banner_icon"></i><Link>Server & Storage</Link></li>
                </ul>
            </div>
            <div className="right_banner"></div>
        </div>
    </div>
  )
}
