export const Home = () => {
    return (
        <>
            <div className="container flex items-center justify-center border min-w-[90vw] min-h-[50vh] m-auto">
                <div className="flex flex-col w-1/2 p-6 m-4 gap-6 justify-evenly">
                <img src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb" 
                    className="w-13 h-13 rounded-full object-fit-cover drop-shadow-2xl fixed" alt="" />
                    <h1 className="text-5xl font-bold m-auto    ">
                        Full Stack Developer and Web Designer
                    </h1>
                    <p className="text-lg opacity-80 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur, 
                        quis ab ex natus illum, pariatur quam numquam quisquam sed dolore saepe! 
                        Praesentium harum officia, voluptas necessitatibus iusto aperiam animi eum dignissimos 
                        fugiat vitae tenetur dicta fugit dolor mollitia quis iure debitis autem adipisci soluta 
                        in quasi! Velit eos quasi dolorem tempora doloremque maiores quod dolores reiciendis, 
                        minus perferendis quas sit consequuntur quisquam, unde nemo rerum porro accusantium nisi 
                        ex vero alias. Nostrum obcaecati voluptatum, expedita voluptatem libero ut cum autem excepturi 
                        quis ullam quasi. Accusantium exercitationem quis explicabo obcaecati sunt, dolorum numquam minus 
                        molestiae maiores totam, aspernatur corrupti saepe.
                    </p>
                </div>
                <div className="w-1/2 p-4 overflow-hidden rounded">
                    <img 
                    src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb" 
                    alt="" 
                    className="w-100 h-100 m-auto object-fit-cover rounded-3xl shadow-lg rotate-2"
                    />
                </div>
            </div>
        </>
    );
};