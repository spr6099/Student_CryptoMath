import React from 'react'

function StudentCard({name,gender,image,admissionId,classG}) {
    return (
        <>
            <div class="card mb-3" style={{ width: '100%' }}>
                <div class="card-header">
                    <h4 className='card-title'>Name</h4>
                </div>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://th.bing.com/th/id/OIP.lGs8_kicfoRys5XSv-j0GQHaE7?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="img-fluid rounded-start h-100" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div className="row">
                                <div className="col-6 card-text">Name</div>
                                <div className="col-6 card-text">{name}</div>
                                <div className="col-6 card-text">Gender</div>
                                <div className="col-6 card-text">{gender}</div>
                                <div className="col-6 card-text">Admission Id</div>
                                <div className="col-6 card-text">{admissionId}</div>
                                <div className="col-6 card-text">Class</div>
                                <div className="col-6 card-text">{classG}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-body-secondary">
                    <button className='btn'>View</button>
                </div>
            </div>
        </>
    )
}

export default StudentCard