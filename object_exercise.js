//1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var favCoffee = {
    name: 'nescafe',
    stenght: 'strong',
    flavour: 'classic',
    milk: 'yes',
    sugar: 'yes'
};

// 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.

var favMovie = {
    tittle: 'Inception',
    actor: 'Leonardo DiCaprio',
    director: 'Cristopher Nolan',
    genre: 'Action, Sci-fi',
    popularity: 'Very popular'
};


// 3.

(function () {

    // {
    //     description: 'This is a project dedicated to solve the issue of creating a multiple object of the same kind',
    //     programingLanguage: 'JavaScript',
    //     gitRepo: 'https://github.com/programer/first-project',
    //     status: true,
    // };

    function createProject(description, programingLanguage, gitRepo, status) {
        var obj =  {
            description: description,
            programingLanguage: programingLanguage,
            gitRepo: gitRepo,
            develompentStatus: status,
            printRepo: function () {
                return obj.gitRepo
            }
        }

        return obj;
    }

    var project1 = createProject('This is a project dedicated to solve the issue of creating a multiple object of the same kind', 'JavaScript', 'https://github.com/programer/first-project', true);
    var project2 = createProject('New Project', 'PHP', '', false);
    var project3 = createProject();

    console.log('project1 ', project1.printRepo());
    console.log('project2 ', project2.printRepo());
    console.log('project3 ', project3);
    
})();