import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

export const AuthSheet = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        toast({
          title: "Successfully signed in",
          description: "Welcome back!",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          {session ? "Account" : "Sign In"}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Welcome to NFTVerse</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          {!session ? (
            <Auth
              supabaseClient={supabase}
              view="magic_link"
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'rgb(var(--foreground))',
                      brandAccent: 'rgb(var(--primary))',
                    },
                  },
                },
              }}
              showLinks={false}
              providers={[]}
              redirectTo={window.location.origin}
            />
          ) : (
            <div className="space-y-4">
              <p>Signed in as {session.user.email}</p>
              <Button
                onClick={() => {
                  supabase.auth.signOut();
                  toast({
                    title: "Signed out",
                    description: "Successfully signed out of your account",
                  });
                }}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};