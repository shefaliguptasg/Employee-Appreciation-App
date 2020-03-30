    const nameRegex = RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
    const strongRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
    //const EmpCodeRegex= RegExp(/^[0-9]*$/)
    const formValid= errors=>{
        let valid = true;
        Object.values(errors).forEach(val =>{ val.length > 0 && (valid= false)
        });
        return valid;
}
