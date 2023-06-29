const skills = [
    {id:1, skill: 'HTML'},
    {id:2, skill: 'CSS'},
    {id:3, skill: 'JavaScript'}
];

function getAll(){
    return skills;
};

function getOne(id){
    id=parseInt(id);
    return skills.find(skill=> skill.id === id)
};

module.exports={
    getAll,
    getOne
};