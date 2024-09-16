import { contactServices } from "../services/contact.services.js";
import sendResponse from "../utils/sendResponse.js";

const sendContactMessage = async (req, res, next) => {
  try {
    const { email, name, message } = req.body;

    const result = await contactServices.sendContactMessage(
      email,
      name,
      message
    );

    res.json({
      success: true,
      message: "Message sent successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const contactControllers = {
  sendContactMessage,
};
