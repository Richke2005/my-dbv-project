const dataSource = require("../database/models/index");

class Services{
    constructor(modelName){
        this.modelName = modelName;
    }
    
    async getAllAtData(){
        return dataSource[this.modelName].findAll();
    }

    async getDataById(id){
        return dataSource[this.modelName].findByPk(id);
    }

    async createNewReg(reg){
        return dataSource[this.modelName].create(reg);
    }

    async updateReg(updatedData, id){
        const listOfUpdatedData = await dataSource[this.modelName].update(updatedData, {
            where: {id: id}
        });

        if(listOfUpdatedData[0] === 0){
            return false;
        }
        return listOfUpdatedData;
    }

    async deleteReg(id){
        const dataExcluded = dataSource[this.modelName].destroy({
            where: {id: id}
        });

        if(dataExcluded === 0){
            return false;
        }
        return dataExcluded;
    }
}

module.exports = Services;

//service pega e abstrai as funções da camada de modelos/banco para distribuir para aplicação