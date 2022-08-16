let Landing = require("../schemas/landings")


const getAllLandings = async () => {
    try{
        const getLandings = await Landing.find({},"-_id");
        return getLandings
    }
    catch(err){
        console.error(err);
    }
}


module.exports={
    getAllLandings

}