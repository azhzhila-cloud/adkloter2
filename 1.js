function biodata() {
    var name = "Miftahul Aziz";
    var age = 22;
    var address = "Dusun Bojonggedang RT 007 RW 007 Desa Cikedondong Kecamatan Bantarsari Kabupaten Cilacap";
    var hobbies = ["design", "reading", "photography", "coffee", "learn coding"];
    var is_married = false;
    var list_school = {
        name: {
            'SD Negeri 1 Cikedondong': {
                year_in: 2003,
                year_out: 2009,
                major: null
            },
            'MTs MINAT Kesugihan': {
                year_in: 2009,
                year_out: 2012,
                major: null
            },
            'MA MINAT Kesugihan': {
                year_in: 2013,
                year_out: 2016,
                major: 'IPA'
            }
        }
    };
    var skills = {
        skill_name: {
            coreldraw: { level: 'advanced' },
            photoshop: { level: 'advanced' },
            javascript: { level: 'beginner' },
            css: { level: 'advanced' },
            html: { level: 'advenced' },
        }
    };
    var interest_in_coding = true;

    //  hasil
    let result = { name, age, address, hobbies, is_married, list_school, skills, interest_in_coding };
    let json_result = JSON.stringify(result);

    // return hasil
    return console.log(json_result);
    // let target = document.getElementById("target");
    // return target.innerHTML = result['name'];
}

// jalakan method
biodata();
// let bio = biodata();

// // start method
// function print(){

//     // alses data JSON
//     let print = JSON.parse(bio);

//     // var target
//     var target = document.getElementById("target");

//     // kembalikan nilai
//     return target.innerHTML = print['name'];

// }
// // end method

// // jalankan method
// print();