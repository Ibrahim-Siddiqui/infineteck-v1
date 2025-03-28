import { toast } from "sonner";
export const formRequest = async (data: any) => {
  console.log("Data from for request function: ", data)
 
    const formData = new FormData();
    formData.append("Name", data.name)
    formData.append("Company", data.company)
    formData.append("Email", data.email)
    formData.append("Phone", data.phone)
    formData.append("Message", data.message)
    formData.append("Services", data.services)

  try {
    const response = await fetch("https://formbold.com/s/6Q5Jv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      toast("Form submitted successfully!");
      
    } else {
      toast("Form submission failed.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
