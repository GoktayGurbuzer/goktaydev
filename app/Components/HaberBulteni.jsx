import React from 'react';

const HaberBulteni = () => {
    return (
        <div className="px-4 flex flex-col items-center justify-center ">
            <div className="bg-[#1f262d] rounded-xl my-8 py-8 px-4 w-full">
                <p className="text-center">En son projelerim ve maceralarımdan haberdar olun!</p>
                <input className="py-2 px-4 w-full text-center my-4 bg-amber-50 placeholder-gray-300 rounded-xl" type="email" name="email" id="email" placeholder="Haber Bültenine Kayıt Ol" />
                <button className="bg-green-900 py-2 px-4 w-full rounded-xl font-bold">Kayıt Ol</button>
            </div>


        </div>
    )
};

export default HaberBulteni;