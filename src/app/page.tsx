import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-cocktail-gradient flex-col items-center">
        <h1 className="text-center text-2xl font-bold my-8">Kattis Bar</h1>

        <div className="container mx-auto px-4 md:px-12 my-12">
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="/purple.png" alt="Blueberry drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Blueberry smash</div>
                        <ul className="text-gray-700 list-disc">
                            <li>Blåbärs- och apelsincordial</li>
                            <li>Lime</li>
                            <li>Cider</li>
                            <li>Mynta (dekoration)</li>
                        </ul>
                        <p className="text-gray-700 text-base line-clamp-3">Blåbärs och apelsincordialen ger en färsk
                            smak till drinken och kan fungera både med eller utan alkohol. Toppas med mynta.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="images/aperol.png" alt="Aperol Spritz Drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Aperol Spritz</div>
                        <ul className="text-gray-700 list-disc">
                            <li>Spritz cider</li>
                            <li>Mousserande vin</li>
                            <li>Apelsin</li>
                        </ul>
                        <p className="text-gray-700 text-base line-clamp-3">En klassisk drink som blandas
                            med en smaksatt cider, enkelt, lätt och bra!</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="/mojito.png" alt="Mojito drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Mojito</div>
                        <ul className="text-gray-700 list-disc">
                            <li>Rom</li>
                            <li>Sodavatten</li>
                            <li>Limejuice</li>
                            <li>Sockerlag</li>
                            <li>Mynta (dekoration)</li>
                        </ul>
                        <p className="text-gray-700 text-base line-clamp-3">En klassiker, och det enda tillfället att älska mynta!</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="/champ.png" alt="Champange drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Bubbel</div>
                        <p className="text-gray-700 text-base line-clamp-3">Bubbel eller
                            mousserande vin kan ju avnjutas som det är såklart!.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="/blue.PNG" alt="Blue drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Curacao drinks</div>
                        <ul className="list-disc">
                            <li>Rom</li>
                            <li>Blue Curacao</li>
                            <li>Cider eller soda </li>
                        </ul>
                        <p className="text-gray-700 text-base line-clamp-3">Curacao kan blandas med rom eller vodka
                            och därefter med sodavatten eller någon smaksatt cider.</p>
                    </div>
                </div>
            </div>


        </div>



        {/*<div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-col">  Changed to flex-col for vertical stacking
                <div className="my-1 px-1 w-full">  Full width for single column
                     Card
                    <div className="max-w-sm w-full lg:max-w-full">
                        <div
                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{ backgroundImage: `url('/purple.png')` }} title="Woman holding a mug">
                        </div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/>
                                    </svg>
                                    Members only
                                </p>
                                <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better
                                    developer?
                                </div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                    exercitationem praesentium nihil.</p>
                            </div>
                            <div className="flex items-center">hej</div>
                        </div>
                    </div>
                     End Card
                </div>

                 Additional cards can be added here and they will stack vertically
            </div>
        </div>*/}

     {/*   <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">

                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <div className="max-w-sm w-full lg:max-w-full lg:flex">
                        <div
                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{ backgroundImage: `url('/purple.png')` }} title="Woman holding a mug">
                        </div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/>
                                    </svg>
                                    Members only
                                </p>
                                <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better
                                    developer?
                                </div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                    exercitationem praesentium nihil.</p>
                            </div>
                            <div className="flex items-center">hej</div>
                        </div>
                    </div>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">tjena</div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">halloj</div>
            </div>
        </div>*/}
    </main>
  )
}
