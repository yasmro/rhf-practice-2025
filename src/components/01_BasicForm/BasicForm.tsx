import { useForm, FormProvider } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";

type FormValues = {
  name: string;
  age: number;
};

export default function BasicForm() {
  // フォームで扱うデータの型をここで指定(今回はFormValues)
  const methods = useForm<FormValues>({
    defaultValues: {
      name: "",
      age: 20,
    },
  });

  function handleSubmit(data: FormValues) {
    // フォーム送信時の処理
    console.log("Submitted Data:", data);
  }

  return (
    // フォーム全体のコンポーネントを FormProvider でラップする FormProviderを使って、useFormで作成したメソッドを子コンポーネントに渡す
    <FormProvider {...methods}>
      {/* ここに子コンポーネントを追加 */}
      <div className="p-4">
        <Card className="px-4">
          <CardTitle>Basic Form</CardTitle>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <Label htmlFor="name">Name:</Label>
                <Input type="text" {...methods.register("name")} />
              </div>
              <div className="flex gap-4">
                <Label htmlFor="age">Age:</Label>
                <Input
                  type="number"
                  // valueAsNumberを使うことで、入力値を数値として扱う
                  {...methods.register("age", { valueAsNumber: true })}
                />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Card>
      </div>
    </FormProvider>
  );
}
