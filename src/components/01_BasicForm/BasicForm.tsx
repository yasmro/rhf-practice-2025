import { useForm, FormProvider, type FieldErrors } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";
import type { Form1Values } from "@/types";
import StudentSection from "./StudentSection";
import { toast, Toaster } from "sonner";
import { useRef } from "react";

export default function BasicForm() {
  const pageRef = useRef<HTMLDivElement>(null);

  // フォームで扱うデータの型をここで指定(今回はForm1Values)
  const methods = useForm<Form1Values>({
    defaultValues: {
      name: "",
      age: 20,
      students: [],
    },
  });

  function handleSubmit(data: Form1Values) {
    toast("フォームが送信されました");
    // フォーム送信時の処理
    console.log("Submitted Data:", data);
  }

  function handleValidationError(data: FieldErrors<Form1Values>) {
    toast("入力内容に問題があります");
    console.log(data);
    // エラーのときにフォームトップへ移動
    pageRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    // フォーム全体のコンポーネントを FormProvider でラップする FormProviderを使って、useFormで作成したメソッドを子コンポーネントに渡す
    <FormProvider {...methods}>
      {/* ここに子コンポーネントを追加 */}
      <div className="p-4" ref={pageRef}>
        <Card className="px-4">
          <CardTitle>Basic Form</CardTitle>
          <form
            onSubmit={methods.handleSubmit(handleSubmit, handleValidationError)}
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <Label htmlFor="name">Name:</Label>
                <Input
                  type="text"
                  {...methods.register("name", { required: "名前は必須です" })}
                />
                <p style={{ color: "red" }}>
                  {methods.formState.errors.name?.message}
                </p>
              </div>
              <div className="flex gap-4">
                <Label htmlFor="age">Age:</Label>
                <Input
                  type="number"
                  // valueAsNumberを使うことで、入力値を数値として扱う
                  {...methods.register("age", { valueAsNumber: true })}
                />
                <p style={{ color: "red" }}>
                  {methods.formState.errors.age?.message}
                </p>
              </div>

              <StudentSection />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Card>
      </div>
      {/* トースト通知のコンポーネント */}
      <Toaster />
    </FormProvider>
  );
}
