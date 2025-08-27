import { toast } from "sonner";
export const formRequest = async (data: any) => {

  const formData = new FormData();

  formData.append("Blog Title", data.blogTitle);
  formData.append("Name", data.name);
  formData.append("Email", data.email);
  formData.append("Comment", data.comment);

  try {
    const response = await fetch("https://formbold.com/s/ozK8r", {
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
