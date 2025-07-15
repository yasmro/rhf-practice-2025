import { type Form1Values } from "@/types";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

const StudentSection: React.FC = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<Form1Values>();

  const { fields, append, remove } = useFieldArray<Form1Values>({
    control,
    name: "students",
  });

  return (
    <section className="flex flex-col gap-4">
      {fields.map((student, index) => (
        <div
          className="flex gap-4 w-full p-4 bg-gray-100 rounded-2xl"
          key={student.id}
        >
          <div className="flex-grow-1">
            <label>名前:</label>
            <Input
              {...register(`students.${index}.name`, {
                required: "名前は必須です",
              })}
            />
            {errors.students?.[index]?.name && (
              <p style={{ color: "red" }}>
                {errors.students[index].name.message}
              </p>
            )}
          </div>
          <div className="flex-grow-1">
            <label>クラス:</label>
            <Input
              {...register(`students.${index}.class`, {
                required: "クラスは必須です",
              })}
            />
            {errors.students?.[index]?.class && (
              <p style={{ color: "red" }}>
                {errors.students[index].class.message}
              </p>
            )}
          </div>
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "", class: "" })}>
        Add Student
      </button>
    </section>
  );
};

export default StudentSection;
