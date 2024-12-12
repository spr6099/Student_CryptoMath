import React from 'react'

function MiniCard({Icon, color}) {
    return (
        <>
            <div class="card mb-3 w-100 shadow bg-body-tertiary rounded">
                <div class="row g-0">
                    <div class={`col-md-4`}>
                        <div className={`${color} h-100 d-flex justify-content-center align-items-center`}><Icon src="..." class="" style={{fontSize:"3rem"}} alt="..." /></div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">1000</p>
                            <h5 class="card-title">Fee</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniCard