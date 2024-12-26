const Service = require("./services.js");
const { ObjectId } = require("mongodb");

class ClassService extends Service{
    constructor(){
        super("classes");
    }

    async getPathfindersByClassId(id){
        return this.getRegByAggregation([
            {
                $match: {
                    _id: new ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: "pathfinders",
                    localField: "_id",
                    foreignField: "class._id",
                    as: "pathfinders"
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    image: 1,
                    type: 1,
                    club: 1,
                    'pathfinders._id': 1,
                    'pathfinders.name': 1,
                    'pathfinders.email': 1,
                    'pathfinders.unit': 1,
                    'pathfinders.image': 1
                }
            },
            {
                $lookup: {
                    from: "leaderships",
                    localField: "_id",
                    foreignField: "led_class._id",
                    as: "leaderships"
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    image: 1,
                    type: 1,
                    club: 1,
                    'pathfinders._id': 1,
                    'pathfinders.name': 1,
                    'pathfinders.email': 1,
                    'pathfinders.unit': 1,
                    'pathfinders.image': 1,
                    'leaderships._id': 1,
                    'leaderships.name': 1,
                    'leaderships.function': 1,
                    'leaderships.email': 1,
                    'leaderships.image': 1
                }
            },
        ])
        .then(items => items[0]);
    }
}

module.exports = ClassService;