const Electeur = require('../lib/prisma').electeur;

const numeroOrdre = () => {
    const randomChars = Math.floor(Math.random() * 10000)
    const currentYear = new Date().getFullYear().toString().slice(-2);
    return currentYear + randomChars;
}

exports.createElecteur = async (req, res) => {


    const {
        uniqueNum,
        nom,
        prenoms,
        sexe,
        dateNaiss,
        lieuNaissance,
        profession,
        domicile,
        nomPere,
        prenomPere,
        dateNaissPere,
        nomMere,
        prenomMere,
        dateNaissMere,
        isVote,
        dateInscription,
    } = req.body

    try {
        const existingElecteur = await Electeur.findUnique({
            where: {
                uniqueNum,
            },
        });

        if (existingElecteur) {
            return res.status(400).json({
                message: "Un électeur avec ce numéro d'identification existe déjà.",
                success: false,
            });
        }

        const createElecteur = await Electeur.create({
            data: {
                order: numeroOrdre(),
                uniqueNum,
                nom,
                prenoms,
                sexe,
                dateNaiss: new Date(dateNaiss).toISOString(),
                lieuNaissance,
                profession,
                domicile,
                nomPere,
                prenomPere,
                dateNaissPere,
                nomMere,
                prenomMere,
                dateNaissMere,
                isVote: false,
                dateInscription: new Date(),
            }
        })

        if (uniqueNum.length < 11) {
            res.status(404).json({ message: "Veuillez revoir le Numero nationale d'identification", success: "false", status: 404 })
        } else {
            console.log(createElecteur)
            res.status(201).json({ message: "Succès", success: "true", status: 200, createElecteur })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Erreur lors de la création d'un site" })
    }

}

exports.getAllElecteurs = async (req, res) => {
    try {
        const electeurs = await Electeur.findMany();
        res.json({ electeurs })
        // res.status(201).status({ electeurs })
        console.log(electeurs)
    } catch (error) {
        console.log(error);
        res.json(500).status({ error: "Erreur de votre code" })
    }
}