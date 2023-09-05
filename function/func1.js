class func1{
    async function1(req,res){
        try {
            const a = req.params.a
            const {data} = req.body
            let sum = parseInt(a) + parseInt(data);
            let mult = parseInt(a) * parseInt(data);

            return res.status(200).json({
                "summ": sum,
                "mult":mult
                
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                status: "error"
            })
        }
    }
}
module.exports = new func1();

//Hello
