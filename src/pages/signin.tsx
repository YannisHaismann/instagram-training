import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { type ProviderType, type Provider } from "next-auth/providers";
import { getProviders, signIn } from "next-auth/react";
import AuthLayout from "~/layouts/AuthLayout";
import { authOptions } from "~/server/auth";
import { z } from "zod";
import Image from "next/image";
import Button from "~/components/buttons/Button";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!providers)
    return <div>Il n y a aucun moyen de connexion pour le moment</div>;

  const getLogo = (id: string): string | undefined => {
    switch (id) {
      case "google":
        return "/assets/google-logo.png";
        break;
      case "github":
        return "/assets/github-logoV2.png";
        break;
      default:
        break;
    }
  };

  return (
    <AuthLayout>
      <div className="flex h-full grow justify-center gap-2">
        <div className="hidden lg:block">
          <Image
            src="/assets/double-phone-login.png"
            width={500}
            height={500}
            alt="double-phone-login"
          />
        </div>
        <div className="my-auto flex flex-col items-center border border-gray-300 p-20">
          <Image
            src="/assets/instagram-title.png"
            width={200}
            height={200}
            alt="double-phone-login"
          />
          <div className="flex flex-col gap-2">
            {Object.values(providers).map((provider: Provider) => (
              <div key={provider.id}>
                <Button
                  logo={getLogo(provider.id)}
                  title={`Se connecter avec ${provider.name}`}
                  action={() => void signIn(provider.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export function getServerSideProps() {
  const providers: Provider[] = authOptions.providers;
  const str: string = JSON.stringify(providers);
  const res: unknown = JSON.parse(str);

  return {
    props: { providers: res ?? [] },
  };
}
