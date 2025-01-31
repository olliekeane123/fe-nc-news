import { useState, useEffect, useRef } from 'react'
import dropdownarrow from '../../assets/dropdownarrow.svg'
export function BrowseByBar ({setSearchParams}) {

    const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open

    let browseBarRef = useRef()

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName)); // Toggle open state
    };

    useEffect(()=>{
        document.addEventListener("mousedown", (e)=> {
            if(browseBarRef.current && !browseBarRef.current.contains(e.target)){
                setOpenDropdown(null)
            }
        }
    )}, [])

    const handleSort = (topicValue, sortByValue, orderValue) => {
        const params = { topic: topicValue, sort_by: sortByValue, order: orderValue }
        for(let key in params){
            if(params[key] === null){
                delete params[key]
            } 
        }
        setSearchParams(params)
    };


    return (
    
        <div className='browseby-bar'>
            {/* <img src={dropdownarrow} alt="loveheart icon" /> */}
            <p id='browseby-title'>browse by</p>
            <div className='browse-params-container' ref={browseBarRef}>
                <div id='browse-by-year' className='dropdown-container'>
                    <div className='dropdown-header-container' onClick={() => toggleDropdown("date")}>
                        <p>date</p>
                        <img src={dropdownarrow} alt="dropdown arrow"/>
                    </div>
                    {openDropdown === 'date' && (<ul className='sort-query-list'>
                        <li className='sort-query'><button type='button' onClick={()=>handleSort(null, "created_at", "asc")}>oldest</button></li>
                        <li className='sort-query'><button onClick={()=>handleSort(null, "created_at", "desc")}>newest</button></li>
                    </ul>)}
                </div>
                <div id='browse-by-popular' className='dropdown-container'>
                    <div className='dropdown-header-container' onClick={() => toggleDropdown("popular")}>
                        <p>popular</p>
                        <img src={dropdownarrow} alt="dropdown arrow"/>
                    </div>
                    {openDropdown === 'popular' && (<ul className="sort-query-list">
                        <li className="sort-query"><button onClick={()=>handleSort(null, "comment_count", "desc")}>most comments</button></li>
                        <li className="sort-query"><button onClick={()=>handleSort(null, "comment_count", "asc")}>fewest comments</button></li>
                        <li className="sort-query"><button onClick={()=>handleSort(null, "votes", "desc")}>most votes</button></li>
                        <li className="sort-query"><button onClick={()=>handleSort(null, "votes", "asc")}>fewest votes</button></li>
                    </ul>)}
                </div>
                <div id='browse-by-topic' className='dropdown-container'>
                    <div className='dropdown-header-container' onClick={() => toggleDropdown("topic")}>
                        <p>topic</p>
                        <img src={dropdownarrow} alt="dropdown arrow"/>
                    </div>
                    {openDropdown === "topic" && (<ul className="sort-query-list">
                        <li className="sort-query"><button onClick={()=>handleSort("football", null, null)}>football</button></li>
                        <li className="sort-query"><button onClick={()=>handleSort("cooking", null, null)}>cooking</button></li>
                        <li className="sort-query"><button onClick={()=>handleSort("coding", null, null)}>coding</button></li>
                        <li className="sort-query"><button onClick={()=>handleSort(null, null, null)}>films</button></li>
                    </ul>)}
                </div>
            </div>
        </div>
            
    )
}