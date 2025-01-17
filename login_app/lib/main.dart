import 'package:flutter/material.dart'; 
import 'package:login_app/pages/login_page.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget { 
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) { 
    return const MaterialApp(
      title: 'Login App', home: LoginPage(),
    );
  }
}
