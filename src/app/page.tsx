import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-cocktail-gradient flex-col items-center">
        <div className="bg-white bg-opacity-50 rounded-lg p-4 text-center shadow-lg mt-8">
            <h1 className="text-2xl lg:text-4xl font-bold">
                Kattis Bar
            </h1>
        </div>



        <div className="container mx-auto px-4 md:px-12 my-12">
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="./purple.png" alt="Blueberry drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Blueberry smash</div>
                        <ul className="text-teal-700 list-none">
                            <li>Blåbärs- och apelsincordial</li>
                            <li>Lime</li>
                            <li>Cider</li>
                            <li>Mynta (dekoration)</li>
                        </ul>
                        <p className="mt-4 text-gray-700 text-base line-clamp-4">Blåbärs och apelsincordialen ger en färsk
                            smak till drinken och den är god med eller utan alkohol. Toppas med mynta.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="./aperol.png" alt="Aperol Spritz Drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Aperol Spritz</div>
                        <ul className="text-teal-700 list-none">
                            <li>Spritz cider</li>
                            <li>Mousserande vin</li>
                            <li>Apelsin</li>
                        </ul>
                        <p className="mt-4 text-gray-700 text-base line-clamp-3">En klassisk drink som blandas
                            med en smaksatt cider, enkelt, lätt och bra!</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="./mojito.png" alt="Mojito drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Mojito</div>
                        <ul className="text-teal-700 list-none">
                            <li>Rom</li>
                            <li>Sodavatten</li>
                            <li>Limejuice</li>
                            <li>Sockerlag</li>
                            <li>Mynta (dekoration)</li>
                        </ul>
                        <p className="mt-4 text-gray-700 text-base line-clamp-3">En till klassiker, och ett till
                            tillfälle att älska mynta!</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="./champ.png" alt="Champange drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Bubbel</div>
                        <p className="mt-4 text-gray-700 text-base line-clamp-3">Bubbel eller
                            mousserande vin kan ju avnjutas som det är såklart!.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="./blue.png" alt="Blue drink" />
                    </div>
                    <div className="p-8">
                        <div className="text-gray-900 font-bold text-xl mb-2"> Curacao drinks</div>
                        <ul className="text-teal-700 list-none">
                            <li>Rom</li>
                            <li>Blue Curacao</li>
                            <li>Cider eller soda </li>
                        </ul>
                        <p className="mt-4 text-gray-700 text-base line-clamp-4">Curacao kan blandas med rom eller vodka
                            och därefter med sodavatten eller någon smaksatt cider.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
