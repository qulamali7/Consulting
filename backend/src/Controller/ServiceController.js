import { ServiceModel } from "../Model/ServiceModel.js";

export const GetAll = async (req, res) => {
  const services = await ServiceModel.find({});
  res.send(services);
};

export const GetById = async (req, res) => {
  const { id } = req.params;
  const service = await ServiceModel.findById(id);
  res.send(service);
};

export const CreateService = async (req, res) => {
  const { icon, title, text } = req.body;
  const newService = new ServiceModel({ icon, title, text });
  await newService.save();
  res.send("Got a POST request");
};

export const UpdateService = async (req, res) => {
  const { id } = req.params;
  const { icon, title, text } = req.body;
  const service = await ServiceModel.findByIdAndUpdate(id, {
    icon,
    title,
    text,
  });
  res.send("Got a PUT request at /service");
};

export const DeleteService = async (req, res) => {
  const { id } = req.params;
  const service = await ServiceModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /service");
};
