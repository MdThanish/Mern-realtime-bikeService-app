import React from "react";


export const Namebar = () => {
    return (
        <>
            <nav class="navbar bg-dark position-fixed w-100">
                <div class="container-fluid d-flex justify-content-center">
                    <span class="navbar-brand text-white">
                        
                        NISH BIKE SERVICE
                    </span>
                </div>
                <div className=" d-flex justify-content-center container-fluid">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link bg-dark text-white active" aria-current="page" href="/admin">Admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="bg-dark text-white nav-link active" aria-current="page" href="/Login">Customer</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}