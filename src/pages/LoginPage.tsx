import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { LoginForm } from "../components/LoginForm";

function LoginPage() {
  //const { product, loading, error } = useProduct();

  return (
    <div className="border py-2 px-4 rounded flex-col items-center mb-2">
      {/* {loading && <Loader />}
      {error && <ErrorMessage errorMessage={error} />}
      {product && <ProductFull product={product} />} */}
      <LoginForm />
    </div>
  );
}

export default LoginPage;
