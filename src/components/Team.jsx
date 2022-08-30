import React,{useState} from 'react'
import Users from '../data/presentmem';

export default function Team() {
    const [page, setPage] = useState(1);
    const increase = (e) => {
        e.preventDefault();
        setPage(page + 1);
    }
    const decrease = (e) => {
        e.preventDefault();
        setPage(page - 1);
    }
    return (
        <div className="team">
            <h2 id="tools-title">Teams</h2>
            <div id="themes-section" className=" grid md:grid-cols-3 md:gap-x-12 md:gap-y-8 grid-cols-1 gap-y-6 justify-items-center items-center md:justify-center lg:px-[50px] pt-8 lg:px-[200px]">
            
                
                    
                        {Users.slice((page - 1) * 9, (page - 1) * 9 + 9).map((e) => {
                            return(
                            <>
                            <label className="jadu slideanim">
                            <div className="flip-card">
                            <div className="front">
                                <img src={`https://source.unsplash.com/1600x900/?person`} className="content-cover" />
                                <h1 className="m-5 text-semibold">{e.name}</h1>
                            <div className="social_links">
                                <ul className="">
                                    <a href={e.githubLink}><li><i class="fa fa-github"></i></li></a>
                                    <a href={e.linkedLink}><li><i class="fa fa-linkedin"></i></li></a>
                                    <a href={e.domain}><li><i class="fa fa-bomb"></i></li></a>
                                </ul>        
                            </div>
                            </div>
                            </div>
                            </label>
                            </>
                        )})}
                        
            </div>
            <div className="flex justify-center align-center space-x-2">
                <a href="#" onClick={decrease} class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                     Previous
                </a>
                <a href="#" onClick={increase} class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                     Next
                </a>
            </div>
        </div>
    )
}
