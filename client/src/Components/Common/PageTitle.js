import React from 'react'

const PageTitle = (props) => {
    return (
        <div>
              <h2 class="text-6xl font-extrabold text-gray-800 dark:text-white xs:text-2xl sm:text-7xl">
            <span class="block">
                {props.titleback}
                <span class=" text-yellow-500">
                {props.titleyellow}
            </span>
            </span>

            
        </h2>
     
        </div>
    )
}

export default PageTitle
