import React from 'react'
import { notFound } from 'next/navigation';


// 0. import Metadata
import { Metadata } from 'next'



// Dynamic Metadata
//1. Declare type
type Props = {
    params: Promise<{ metadataId: string }>
}

//2. generateMetadata()
export const generateMetadata = async ({ params }: Props):
    Promise<Metadata> => {
    const metadataId = (await params).metadataId
     let apiURL = 'https://jsonplaceholder.typicode.com/users/'

     async function fetchUsers() {
        let res = await fetch(apiURL + metadataId)
        let data = await res.json()
        return (data)
    }

    const  user = await fetchUsers()

    console.warn(user)

    return {
        title: `Metadata #${user.name}`,
        description: `Description Metadata #${user.name}`
    }
}

//3. params : props
export default async function MetadataId({ params }: Props) {

    // Constrain to 10
    const metadataId = (await params).metadataId
    let apiURL = 'https://jsonplaceholder.typicode.com/users/'

    async function fetchUsers() {
        let res = await fetch(apiURL + metadataId)
        let data = await res.json()
        return data
    }

    const user = await fetchUsers()

    if (parseInt(metadataId) > 10) { notFound() };

    return (
        <>
            <div className="main py-4 px-4">
                <div className="title">
                    <div>
                        <h3 className="text-1xl px-4 font-bold">
                            Metadata Id: <span className="font-light">#{metadataId}</span>
                        </h3>
                    </div>
                </div>
                <div className="all px-8 py-4">
                    <div>
                        <h3 className="text-1xl font-bold">
                            Name: <span className="font-normal">{user.name}</span>
                        </h3>
                    </div>
                    <div>
                        <h3 className="text-1xl font-bold">
                            Username: <span className="font-normal">{user.username}</span>
                        </h3>
                    </div>
                    <div>
                        <h3 className="text-1xl font-bold">
                            Email: <span className="font-normal">{user.email}</span>
                        </h3>
                    </div>
                    <div>
                        <h3 className="text-1xl font-bold">
                            Phone: <span className="font-normal">{user.phone}</span>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-1xl font-bold">
                            Website: <span className="font-normal">{user.website}</span>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-1xl font-bold">
                            Company: <span className="font-normal">{user.company.name}</span>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-1xl font-bold">
                            Catchphrase: <span className="font-normal">{user.company.catchPhrase}</span>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-1xl font-bold">
                            BS: <span className="font-normal">{user.company.bs}</span>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-1xl font-bold">
                            Street: <span className="font-normal">{user.address.street}</span>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-1xl font-bold">
                            Suite: <span className="font-normal">{user.address.suite}</span>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-1xl font-bold">
                            Zip Code: <span className="font-normal">{user.address.zipcode}</span>
                        </h3>
                    </div>

                    <div>
                        <h3 className="text-1xl font-bold">
                            City: <span className="font-normal">{user.address.city}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );

}


