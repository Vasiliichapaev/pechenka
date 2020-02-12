const players_data = [
    {
        name: "Печенька",
        accounts: [
            {
                id: 905540917
            },
            {
                id: 147356773
            }
        ]
    }
];

let main = new Main(players_data);

main.load_data().then(a => {
    main.calculation();
});
