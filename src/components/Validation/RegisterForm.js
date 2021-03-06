
class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange({target}) {
      let fields = this.state.fields;
      fields[target.name] = target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm({e}) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["name"] = "";
          fields["surname"] = "";
          fields["emailid"] = "";
          fields["password"] = "";
          fields["date"] ="";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] =  validationTextList.emptyName;
      }

      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = validationTextList.incorrectSymbUsed;
        }
      }

      if (!fields["surname"]) {
        formIsValid = false;
        errors["surname"] = validationTextList.emptySurname;
      }

      if (typeof fields["surname"] !== "undefined") {
        if (!fields["surname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["surname"] = validationTextList.incorrectSymbUsed ;
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = validationTextList.emptyEmail;
      }

      if (typeof fields["emailid"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = validationTextList.notValidSymbEmail;
        }
      }

      if (!fields["date"]) {
        formIsValid = false;
        errors["date"] = validationTextList.birthdayEmptyDate;
      }
 

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = validationTextList.emptyPassword;
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = validationTextList.weakPassword;
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Name</label>
        <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.name}</div>
        <label>Surname</label>
        <input type="text" name="surname" value={this.state.fields.surname} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.surname}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Date of birth:</label>
        <input type="date" name="date" value={this.state.fields.date} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.date}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}
