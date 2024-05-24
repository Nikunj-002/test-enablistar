import { useForm } from "react-hook-form";
import { addPayee, editPayee } from "../store";
import { useDispatch } from "react-redux";
import classes from "./BeneficiaryForm.module.css";
import { useNavigate } from "react-router-dom";

function BeneficiaryForm({ beneficiaryToEdit = {} }) {
  const navigate = useNavigate();
  //create form does not send cabinToEdit, therefore default is {}
  const { id: editId, ...editValues } = beneficiaryToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const dispatch = useDispatch();

  const { errors } = formState;

  function onSubmit(data) {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      if (isEditSession) {
        dispatch(editPayee({ editId, data }));
        navigate("/");
      } else {
        dispatch(addPayee(data));
        navigate("/");
      }
    }
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <section className={classes.benForm}>
      <h1>Add New Beneficiary</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label htmlFor="name">Beneficiary name</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name is required",
              },
            })}
          />
          {errors?.name?.message && (
            <p className={classes.error}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="bank_name">Bank Name</label>
          <input
            type="text"
            id="bank_name"
            {...register("bank_name", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "This field is required",
              },
            })}
          />
          {errors?.bank_name?.message && (
            <p className={classes.error}>{errors.bank_name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="acc_no">Account Number</label>
          <input
            type="number"
            id="acc_no"
            {...register("acc_no", {
              required: "This field is required",
              minLength: {
                value: 11,
                message: "Account Number contain 11 to 16 digits.",
              },
              maxLength: {
                value: 16,
                message: "Account Number contain 11 to 16 digits.",
              },
            })}
          />

          {errors?.acc_no?.message && (
            <p className={classes.error}>{errors.acc_no.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="acc_type">Account Type</label>
          <select
            id="acc_type"
            defaultValue=""
            name="acc_type"
            {...register("acc_type", {
              required: "This field is required",
            })}
          >
            <option value="" disabled>
              Choose Option
            </option>
            <option value="Current">Current</option>
            <option value="Savings">Savings</option>
          </select>

          {errors?.acc_type && (
            <p className={classes.error}>{errors.acc_type.message}</p>
          )}
        </div>

        <div className={classes.actions}>
          {!isEditSession && <button type="reset">Reset</button>}{" "}
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default BeneficiaryForm;
