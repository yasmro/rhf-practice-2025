import { useForm, FormProvider } from "react-hook-form";

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
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" {...methods.register("name")} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" {...methods.register("age")} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
