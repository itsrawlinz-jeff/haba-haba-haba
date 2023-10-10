import excuteQuery from "@/lib/db";

export default async function POST(req, res){
    if (req.method !== "POST") {
        try {
            console.log("req nom", req.body)
            const result = await excuteQuery({
                query: "INSERT INTO membership (name, email, country, phoneNumber, dateOfBirth, gender,  preferredPartnerGender, relationshipStatus, smoke, drink, partnerDrinks, incomeBracket, ageBracket, chronicIllness, habaService, habaPackageInstallmentPlan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                values: [req.body.content],
            });
            console.log("ttt", result);
        } catch (error) {
            console.log(error);
        }
    }
    res.status(200).json({success: true, data: "result... "});

};