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
    } = req.body;

    try {
        const existingElecteur = await Electeur.findUnique({
            where: {
                uniqueNum,
            },
        });

        if (existingElecteur) {
            return res.status(400).json({
                success: false,
                message: "Un électeur avec ce numéro d'identification existe déjà.",
                status: 400
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
            },
        });

        if (uniqueNum.length < 11) {
            return res.status(404).json({
                success: false,
                message: "Veuillez revoir le Numero nationale d'identification",
            });
        } else {
            console.log(createElecteur);
            return res.status(201).json({
                success: true,
                message: "Enregistrement de l'électeur effectué avec succès !",
                data: createElecteur,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Erreur lors de la création d'un site",
        });
    }
};


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