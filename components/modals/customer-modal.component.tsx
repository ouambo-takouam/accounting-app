import { useFormik } from "formik";
import { addNewCustomer } from "@lib/actions/customer.actions";
import { Icon } from "@components/global/icon.component";
import CustomInput from "../forms/custom-input.component";
// import CustomSelect from "../forms/custom-select.component";

export default function CustomerModal({
  toggleCustomerModal,
}: {
  toggleCustomerModal: React.MouseEventHandler<HTMLSpanElement>;
}) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: async (values) => {
      await addNewCustomer(values, "/customers");
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40">
      <div className="fixed right-0 top-0 bottom-0 w-[36%] text-gray04 bg-white shadow-md">
        {/** header */}
        <div className="fixed left-[64%] right-0 h-14 px-[14px] py-5 flex items-center shadow-sm">
          <span className="flex-1 font-semibold text-xl text-center">
            Client
          </span>
          <span
            className="cursor-pointer p-1 rounded hover:bg-gray02"
            onClick={toggleCustomerModal}
          >
            <Icon name="close" width={20} height={20} />
          </span>
        </div>

        <form onSubmit={formik.handleSubmit}>
          {/** content */}
          <div className="absolute p-6 top-14 bottom-16 left-0 right-0 overflow-auto">
            {/** (Nom et coordonnées) */}
            <div className="rounded pb-4 shadow-box mb-6">
              <div className="flex items-center gap-3 py-3 px-4 text-black02 cursor-pointer hover:bg-gray01">
                <span>
                  <Icon name="address" width={24} height={24} />
                </span>
                <span className="flex-1 font-bold">Nom et coordonnées</span>
                <span>
                  <Icon name="arrow-down" width={24} height={24} />
                </span>
              </div>

              <div className="px-6">
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomInput
                    label="Nom"
                    name="firstName"
                    type="text"
                    formik={formik}
                  />
                  <CustomInput
                    label="Prénom"
                    name="lastName"
                    type="text"
                    formik={formik}
                  />
                  {/* <CustomSelect label="Nom à afficher du client *" /> */}
                </div>
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomInput
                    label="Nom de l'entreprise"
                    name="companyName"
                    type="text"
                    formik={formik}
                  />
                  <CustomInput
                    label="E-mail"
                    name="email"
                    type="email"
                    formik={formik}
                  />
                </div>
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomInput
                    label="Numéro de téléphone"
                    name="phone"
                    type="text"
                    formik={formik}
                  />
                  <CustomInput
                    label="Site Web"
                    name="website"
                    type="text"
                    formik={formik}
                  />
                </div>
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomInput
                    label="Autre"
                    name="otherInfo"
                    type="text"
                    formik={formik}
                  />
                </div>
              </div>
            </div>

            {/** (Adresses) */}
            <div className="rounded pb-4 shadow-box mb-6">
              <div className="flex items-center gap-3 py-3 px-4 text-black02 cursor-pointer hover:bg-gray01">
                <span>
                  <Icon name="place" width={24} height={24} />
                </span>
                <span className="flex-1 font-bold">Adresses</span>
                <span>
                  <Icon name="arrow-down" width={24} height={24} />
                </span>
              </div>

              <div className="px-6">
                <h3 className="leading-8 font-bold text-sm text-black03">
                  Adresse de faturation
                </h3>
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomInput
                    label="Adresse postale 1"
                    name="address1"
                    type="text"
                    formik={formik}
                  />
                  <CustomInput
                    label="Adresse postale 2"
                    name="address2"
                    type="text"
                    formik={formik}
                  />
                </div>
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomInput
                    label="Ville"
                    name="city"
                    type="text"
                    formik={formik}
                  />
                  <CustomInput
                    label="Province"
                    name="state"
                    type="text"
                    formik={formik}
                  />
                </div>
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomInput
                    label="Code postal"
                    name="zip"
                    type="text"
                    formik={formik}
                  />
                  <CustomInput
                    label="Pays"
                    name="country"
                    type="text"
                    formik={formik}
                  />
                </div>
              </div>
            </div>

            {/** (Pieces jointes) */}
            {/* <div className="rounded pb-4 shadow-box mb-6">
              <div className="flex items-center gap-3 py-3 px-4 text-black02 cursor-pointer hover:bg-gray01">
                <span>
                  <Icon name="attachment" width={24} height={24} />
                </span>
                <span className="flex-1 font-bold">
                  Notes et pièces jointes
                </span>
                <span>
                  <Icon name="arrow-down" width={24} height={24} />
                </span>
              </div>

              <div className="px-6">
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomTextarea label="Notes" />
                </div>
                <div className="flex items-center mb-4 gap-x-4"></div>
              </div>
            </div> */}

            {/** (Paiements) */}
            <div className="rounded pb-4 shadow-box mb-6">
              <div className="flex items-center gap-3 py-3 px-4 text-black02 cursor-pointer hover:bg-gray01">
                <span>
                  <Icon name="place" width={24} height={24} />
                </span>
                <span className="flex-1 font-bold">Paiements</span>
                <span>
                  <Icon name="payment-mode" width={24} height={24} />
                </span>
              </div>

              {/* <div className="px-6">
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomSelect label="Mode de paiment principal" />
                  <CustomSelect label="Conditions" />
                </div>
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomSelect label="Options de livraison du document commercial" />
                  <CustomSelect label="Langue a utiliser lors de l'envoi des factures" />
                </div>
              </div> */}
            </div>

            {/** (Infos supplementaires) */}
            <div className="rounded pb-4 shadow-box mb-6">
              <div className="flex items-center gap-3 py-3 px-4 text-black02 cursor-pointer hover:bg-gray01">
                <span>
                  <Icon name="place" width={24} height={24} />
                </span>
                <span className="flex-1 font-bold">Infos supplementaires</span>
                <span>
                  <Icon name="file" width={24} height={24} />
                </span>
              </div>

              {/* <div className="px-6">
                <h3 className="leading-8 font-bold text-sm text-black03">
                  Taxes
                </h3>
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomInput label="Numero d'immatriculation" />
                </div>

                <h3 className="leading-8 font-bold text-sm text-black03">
                  Solde d'ouverture
                </h3>
                <div className="flex items-center mb-4 gap-x-4">
                  <CustomInput label="Solde d'ouverture" />
                  <CustomInput label="En date du" />
                </div>
              </div> */}
            </div>
          </div>

          {/** footer */}
          <div className="fixed left-[64%] right-0 bottom-0 h-16 flex items-center px-4 justify-end shadow-md border">
            <button
              type="submit"
              className="text-white font-semibold px-4 py-1 rounded bg-green02 transition-all hover:bg-green03"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
