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
                    from: "users",
                    localField: "_id",
                    foreignField: "class._id",
                    as: "users"
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    image: 1,
                    type: 1,
                    club: 1,
                    'users._id': 1,
                    'users.classification': 1,
                    'users.name': 1,
                    'users.email': 1,
                    'users.unit': 1,
                    'users.image': 1,
                    'users.function': 1
                }
            },
        ])
        .then(items => items[0]);
    }
}

module.exports = ClassService;