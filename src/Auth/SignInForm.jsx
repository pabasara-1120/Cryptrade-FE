import { useForm } from "react-hook-form"; // Ensure react-hook-form is installed
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"; // Adjust import paths
import { Input } from "@/components/ui/input"; // Adjust import paths
import { Button } from "@/components/ui/button";
import {useNavigate} from "react-router"; // Adjust import paths

const SignInForm = () => {
    const form = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });
    const navigate = useNavigate();

    const onSubmit = async (data)=> {
        try{
            const response = await fetch("http://localhost:8080/auth/login",{
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(data),

            });
            if(!response.ok){
                throw new Error(response.statusText);
                //navigate("/login");
            }
            const result = await response.json();
            console.log(result);

            if(result.status){
                sessionStorage.setItem("jwt",result.jwt);
                navigate("/")
            }else {
                alert(result.message || "Something went wrong");

            }

        }catch(error){
            alert(error.message);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Username Field */}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your username" {...field} />
                            </FormControl>
                            <FormDescription>
                                Use your email address
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password Field */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <Button type="submit">Sign In</Button>
            </form>
        </Form>
    );
};

export default SignInForm;
