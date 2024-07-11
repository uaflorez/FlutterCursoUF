import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart'; 
import 'package:login_app/mocks/mocks_constants.dart';
import 'package:login_app/pages/post_page.dart';

class LoginPage extends StatefulWidget { 
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController _passwordController = TextEditingController(); 
  final TextEditingController _usuarioController = TextEditingController(); 
  final storage = const FlutterSecureStorage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Inicio de sesión")), 
      body: Column(
        children: <Widget>[ 
          TextField(
            controller: _usuarioController,
            decoration: InputDecoration(labelText: 'Usuario'),
          ),
          TextField(
            controller: _passwordController,
            decoration: const InputDecoration(labelText: 'Contraseña'), 
            obscureText: true,
          ),
          ElevatedButton(
            onPressed: () async {
              if (_passwordController.text == mockPassword && listaUsuarios.contains(_usuarioController.text)) {
                await storage.write(key: 'auth_token', value: mockToken); 
                Navigator.of(context).push(MaterialPageRoute(
                  builder: (context) => const PostsPage(),
                ));
              } else { 
                showDialog(
                  context: context,
                  builder: (context) => AlertDialog( 
                    title: const Text('Error'),
                    content: const Text('Usuario y/o Contraseña incorrecta'), 
                    actions: [
                      TextButton(
                        onPressed: () => Navigator.pop(context),
                        child: const Text('OK'),
                      )
                    ],
                  ),
                );
              }
            },      
            child: const Text('Iniciar sesión'),
          ),
        ],
      ),
    );
  }
}

