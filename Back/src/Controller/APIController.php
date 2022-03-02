<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

#[Route('/api', name: 'api')]
class APIController extends AbstractController
{
    #[Route('/', name: 'api_home')]
    public function addition(Request $request): Response
    {
        return $this->json(['message' => "Hello world"]);
    }
}
