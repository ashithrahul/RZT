var people = [{
    name: 'Sandeep',
    empId: 0,
    age: 23,
    orgId: 1
}, {
    name: 'Arjun',
    empId: 1,
    age: 25,
    orgId: 2
}, {
    name: 'Nanha',
    empId: 3,
    age: 22,
    orgId: 1
}, {
    name: 'Nandu',
    empId: 4,
    age: 53,
    orgId: 3
}]

var organizations = [{
    name: 'Razorthink',
    id: 1,
    employees: [0, 3]
}, {
    name: 'Apple',
    id: 2,
    employees: [1]
}, {
    name: 'Microsoft',
    id: 3,
    employees: [4]
}]


const getByPersonName = (name) =>{
    let missing = false;
    let personObj =[];
    let organisationObj =[];
    personObj = people.filter((peopleRow)=> peopleRow.name==name)
    if(personObj.length > 0){
        personObj = personObj[0];
        organisationObj  = organizations.filter((organizationRow)=> organizationRow.id == personObj.orgId)
    }else{
        missing = true;
        console.log("person is missing");
    }
    if(organisationObj.length >0){
        organisationObj = organisationObj[0]
    }else {
        missing = true;
        console.log("organisation is missing");
    }
    if(!missing){

        let response = {}
        response.employee = personObj.name;
        response.emp_id = personObj.empId;
        response.organisation = organisationObj.name;
        response.organisation_id = organisationObj.id;

        return response;
    }

}

const getByOrganisationName = (organisationName) =>{

    let missing = false;
    let personObj =[];
    let organisationObj =[];

    organisationObj = organizations.filter((organizationRow)=> organizationRow.name==organisationName)
    if(organisationObj.length > 0){
        organisationObj = organisationObj[0];
        personObj = people.filter((peopleRow)=> organisationObj.employees.indexOf(peopleRow.empId)>-1)
    }else{
        missing = true;
        console.log("organisation is missing");
    }
    if(!personObj.length >0){
        missing = true;
        console.log("organisation is missing");
    }
    if(!missing){
        let response = {}
        //console.log(personObj);
        response.employee = [personObj];
        response.organisation = organisationObj.name;
        response.organisation_id = organisationObj.id;

        return response;
    }
}

//console.log(getByPersonName('Sandeep'));
console.log(getByOrganisationName('Razorthink'));