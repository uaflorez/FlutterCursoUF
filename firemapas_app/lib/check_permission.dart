import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';
import 'map_screen.dart'; // Asegúrate de que este es el camino correcto a tu pantalla de mapa.

Future<void> checkAndNavigate(BuildContext context) async { 
  var status = await Permission.location.status;
  if (status.isGranted) {
    Navigator.push(context, MaterialPageRoute(builder: (context) => const MapScreen()));
  } else {
    if (status.isPermanentlyDenied) { 
      showDialog(
        context: context,
        builder: (BuildContext context) { 
          return AlertDialog(
            title: const Text("Permisos de Ubicación Requeridos"),
            content: const Text("Esta aplicación necesita acceso a tu ubicación para mostrar el mapa."),
            actions: <Widget>[ 
              TextButton(
                child: const Text("Configuraciones"), 
                onPressed: () {
                  openAppSettings();
                },
              ),
              TextButton(
                child: const Text("Cancelar"), 
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        },
      );
    } else { 
      Permission.location.request().then((requestedStatus) {
        if (requestedStatus.isGranted) {
          Navigator.push(context, MaterialPageRoute(builder: (context) => const MapScreen()));
        } else { 
          showDialog(
            context: context,
            builder: (BuildContext context) { 
              return AlertDialog(
                title: const Text("Permisos de Ubicación Requeridos"),
                content: const Text("Permiso de ubicación no concedido. No puedes acceder al mapa sin permiso."),
                actions: <Widget>[ 
                  TextButton(
                    child: const Text("OK"), 
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  ),
                ],
              );
            },
          );
        }
      });
    }
  }
}
