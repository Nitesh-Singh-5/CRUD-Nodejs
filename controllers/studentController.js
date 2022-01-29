import StudentModel from "../models/Student.js";

class studentController {
    static craeteDoc = async (req, res) => {
        // console.log(req.body);
        try {
            const { name, age, fees } = req.body;
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees,
            })
            // Saving doc
            const result = await doc.save()
            // console.log(result);

            res.redirect("/student");
        } catch (error) {
            console.log(error);
        }

    }
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find()
            // console.log(result);
            res.render("index", { data: result });
        } catch (err) {
            console.log(err);
        }
    }
    static editDoc = async (req, res) => {
        // console.log(req.params.id);
        try {
            const result = await StudentModel.findById(req.params.id);
            // console.log(result);
            res.render("edit.ejs", { data: result });
        } catch (err) {
            console.log(err);
        }

    }
    static updateDoc = async (req, res) => {
        // console.log(req.params.id);
        // console.log(req.body);
        const { id } = req.params;
        const { body } = req;
        try {
            const result = await StudentModel.findByIdAndUpdate(id, body);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
        res.redirect("/student");
    }

    static DeleteDocbyId = async (req, res) => {
        // console.log(req.params.id);
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id);
        } catch {

        }
        res.redirect("/student");
    }
}

export default studentController;